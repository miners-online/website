---
title: Installing Free IPA in Docker
date: 2023-12-12
---

## Prerequisites

The following applications need to be installed on your system:

- Docker
- Git

The guide will assume some details:

- Hostname: `ipa.minersonline.lan`
- Storage path: `/DATA/AppData/freeipa-server`
- Server IP: `10.0.0.97`

You may changes these assumptions based on your requirements. The Hostname will determine the domain name of the Free IPA setup, in this example `minersonline.local`. The Storage path will determine where Free IPA will store its data.

I'm running these commands on an Ubuntu 22.04 system. The commands are probably the same on your system.

### 1. Setup hostname

```bash
sudo hostnamectl set-hostname ipa.minersonline.lan
```

```bash
sudo nano /etc/hosts
```

Add the line `10.0.0.97 ipa.minersonline.lan ipa` to the top of the file but change `10.0.0.97` to your machine's IP

Press `Control + X` then `Y` to save the file.

### 2. Configure your DNS

On your router or your DNS server (like PiHole) add the `ipa.minersonline.lan` hostname to match the IP of your machine.

> [!NOTE]
> This step is different for different models of routers or DNS servers, please consult their documentation.

## Steps

### 1. Choose a container

Chose a container from the [Free IPA Docker Hub](https://hub.docker.com/r/freeipa/freeipa-server/tags). I've chosen `fedora-rawhide`.

### 2. Perform the installation

The following command will run the image we built in the last step. This will run the installation process.

I recommend answering `no` to `Do you want to configure integrated DNS (BIND)?` because the BIND dns server caused problems during my installation.

```bash
docker run --name freeipa-server -ti \
   --read-only \
   -h ipa.minersonline.lan -p 53:53/udp -p 53:53 -p 80:80 -p 443:443 -p 389:389 -p 636:636 -p 88:88 -p 464:464 -p 88:88/udp -p 464:464/udp -p 123:123/udp \
   --sysctl net.ipv6.conf.all.disable_ipv6=0 \
   -v /sys/fs/cgroup/freeipa.scope:/sys/fs/cgroup:ro \
   -v /DATA/AppData/freeipa-server:/data:Z \
   --tmpfs /run --tmpfs /tmp freeipa/freeipa-server:fedora-rawhide
```

> [!NOTE]
> If you get any errors please see the [errors section](#errors) for your error.

### 3. Delete the existing container

```bash
docker stop freeipa-server
docker rm freeipa-server
```

### 4. Restart the container

```bash
docker run -d --name freeipa-server -ti \
   --read-only \
   -h ipa.minersonline.lan -p 53:53/udp -p 53:53 -p 80:80 -p 443:443 -p 389:389 -p 636:636 -p 88:88 -p 464:464 -p 88:88/udp -p 464:464/udp -p 123:123/udp \
   --sysctl net.ipv6.conf.all.disable_ipv6=0 \
   -v /sys/fs/cgroup/freeipa.scope:/sys/fs/cgroup:ro \
   -v /DATA/AppData/freeipa-server:/data:Z \
   --restart unless-stopped \
   --tmpfs /run --tmpfs /tmp freeipa/freeipa-server:fedora-rawhide
```

> [!NOTE]
> If you get any errors please see the [errors section](#errors) for your error.

## Errors

### `Failed to create /init.scope control group: Read-only file system`

If you get the error:

```txt
Failed to create /init.scope control group: Read-only file system
Failed to allocate manager object: Read-only file system
[!!!!!!] Failed to allocate manager object.
Exiting PID 1...
```

#### 1. Delete existing containers / data

`docker rm freeipa-server` and `rm -rf /DATA/AppData/freeipa-server`

#### 2. Perform the installation again

```bash
docker run --name freeipa-server -ti \
   --read-only \
   -h ipa.minersonline.lan -p 53:53/udp -p 53:53 -p 80:80 -p 443:443 -p 389:389 -p 636:636 -p 88:88 -p 464:464 -p 88:88/udp -p 464:464/udp -p 123:123/udp \
   --sysctl net.ipv6.conf.all.disable_ipv6=0 \
   --cgroupns host \
   --security-opt seccomp=unconfined \
   -v /sys/fs/cgroup/freeipa.scope:/sys/fs/cgroup:rw \
   -v /DATA/AppData/freeipa-server:/data:Z \
   --privileged \
   --tmpfs /run --tmpfs /tmp freeipa/freeipa-server:fedora-rawhide --no-ntp
```

#### 3. Delete the new container

```bash
docker stop freeipa-server
docker rm freeipa-server
```

#### 4. Restart the container again

```bash
docker run -d --name freeipa-server -ti \
   --read-only \
   -h ipa.minersonline.lan -p 53:53/udp -p 53:53 -p 80:80 -p 443:443 -p 389:389 -p 636:636 -p 88:88 -p 464:464 -p 88:88/udp -p 464:464/udp -p 123:123/udp \
   --sysctl net.ipv6.conf.all.disable_ipv6=0 \
   --cgroupns host \
   --security-opt seccomp=unconfined \
   -v /sys/fs/cgroup/freeipa.scope:/sys/fs/cgroup:rw \
   -v /DATA/AppData/freeipa-server:/data:Z \
   --restart unless-stopped \
   --privileged \
   --tmpfs /run --tmpfs /tmp freeipa/freeipa-server:fedora-rawhide --no-ntp
```
