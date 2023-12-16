---
title: Installing Samba4 on Ubuntu
---

## Prerequisites

This guide recommends using Ubuntu 22.04 or later.

The guide will assume some details:

- Server IP: `10.0.0.97`
- Kerberos Realm: `MINERSONLINE.LAN`
- Kerberos server hostname: `ipa.minersonline.lan`
- Kerberos administrative server hostname: `ipa.minersonline.lan`

You may changes these assumptions based on your requirements.

### 1. Setup hostname

Set the hostname.

```bash
sudo hostnamectl set-hostname ipa.minersonline.lan
```

Add the hostname to hosts file.

```bash
sudo nano /etc/hosts
```

Add the line `10.0.0.97 ipa.minersonline.lan ipa` to the top of the file but change `10.0.0.97` to your machine's IP

Press `Control + X` then `Y` to save the file.

### 2. Install dependencies

```bash
sudo apt-get install samba krb5-user krb5-config winbind libpam-winbind libnss-winbind
```

During installation you may get asked for your Kerberos Realm, Kerberos server hostname, and Kerberos administrative server hostname.

### 3. Provision Samba

#### 1. Stop existing Samba services

```bash
sudo systemctl stop samba-ad-dc.service smbd.service nmbd.service winbind.service
sudo systemctl disable samba-ad-dc.service smbd.service nmbd.service winbind.service
```

#### 2. Backup Samba configuration

```bash
sudo mv /etc/samba/smb.conf /etc/samba/smb.conf.initial
```

#### 3. Reconfigure Samba

```bash
sudo samba-tool domain provision --use-rfc2307 --interactive
```

You will get asked for the following information:

- Realm: `MINERSONLINE.LAN`.
- Domain: `MINERSONLINE`.
- Server Role: `dc`.
- DNS backend: `SAMBA_INTERNAL`.
- DNS forwarder IP address: Your DNS server's IP (normally your gateway) or Cloudflare (1.1.1.1) or Google (8.8.8.8).
- Administrator password: Enter something secure and rememberable.

#### 4. Make a link to use Samba's Kerberos configuration

```bash
sudo mv /etc/krb5.conf /etc/krb5.conf.initial
sudo ln -s /var/lib/samba/private/krb5.conf /etc/
```

#### 4. Start Samba

```bash
sudo samba
```

### 2. Configure local DNS

DNS is used so external services can locate the domain controller and query the services located on it. This will allow clients to connect to the domain controller easily.

#### 1. Install resolvconf

```bash
sudo apt install resolvconf
sudo systemctl enable --now resolvconf.service
```

#### 2. Configure resolvconf

```bash
sudo nano /etc/resolvconf/resolv.conf.d/head
```

Add `nameserver 127.0.01` at the bottom. Press `Control + X` then `Y` to save the file.
We use `127.0.0.1` because Samba is acting as the DNS server and they are forwarding external DNS requests to outside world.

### 3. Delete conflicting DNS records

Doing the command:

```bash
samba-tool dns query 10.0.0.97 minersonline.lan minersonline.lan A
```

will allow you to check if you have conflicting DNS records. If the IPs `172.17.0.1`, `172.19.0.1`, and `172.18.0.1` appear above the server's ipa `10.0.0.97`. These conflicting records will confuse clients because they will try to connect to themselves instead of the domain controller.

```bash
samba-tool dns delete 10.0.0.97 minersonline.lan minersonline.lan A 172.17.0.1
samba-tool dns delete 10.0.0.97 minersonline.lan minersonline.lan A 172.19.0.1
samba-tool dns delete 10.0.0.97 minersonline.lan minersonline.lan A 172.18.0.1

samba-tool dns delete 10.0.0.97 minersonline.lan ipa.minersonline.lan A 172.17.0.1
samba-tool dns delete 10.0.0.97 minersonline.lan ipa.minersonline.lan A 172.19.0.1
samba-tool dns delete 10.0.0.97 minersonline.lan ipa.minersonline.lan A 172.18.0.1
```

### 4. Testing / verification

#### 1. Verify DNS is working

```bash
host -t SRV _kerberos._udp.minersonline.lan
```

You should get a message like:

```text
_kerberos._udp.minersonline.lan has SRV record 0 100 88 ipa.minersonline.lan.
```

### 2. Test Kerberos

```bash
kinit administrator@MINERSONLINE.LAN
```

You will get asked for the password you set earlier. If successful, you may get a response like `Warning: Your password will expire in 41 days on Fri 26 Jan 2024 12:30:09 GMT`.

The `klist` command will show you a list of your Kerberos tickets you made with `kinit`.
