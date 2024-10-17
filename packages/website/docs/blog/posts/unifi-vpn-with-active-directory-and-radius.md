---
title: 'UniFi VPN with Active Directory and RADIUS'
date:
    created: 2024-10-05
tags: ["unifi", "networking", "active-directory", "radius"]
---

In this guide we will set up a VPN on a UniFi network that uses a RADIUS server that is backed by Active Directory for authentication.

## Step 1. Set up a RADIUS server

To use RADIUS for authentication, you must have a RADIUS server configured.
The RADIUS server built into UniFi cannot be configured to use Active Directory, so an external RADIUS server is required.
Here is a list of potential RADIUS servers you can use:

* Microsoft Network Policy Server (NPS) [Introduction guide](https://learn.microsoft.com/en-us/windows-server/networking/technologies/nps/nps-plan-server?source=recommendations) (**Windows Server only**)
* [FreeRADIUS](https://www.freeradius.org/) (**Potentially Linux only? [TBC]**) [^1]

[^1]: If you are using a Windows Server, you can create a Linux virtual machine using Hyper V, or with an alternative Hypervisor.

## Step 2. Create a RADIUS profile in UniFi

A RADIUS profile is required to tell UniFi where to find the RADIUS server. To create a RADIUS profile, open the Network app and navigate to **Settings** > **Profiles** > **RADIUS**.
At the bottom of the table, click **Create New**.

![](/attachments/1728127006970-144.png)  
**Figure 1. A screenshot of the UniFi create RADIUS profile page**

Once you have done that, you will get the form as shown in Figure 1.
The options of the form that we are interested in are:

1. **Name**: This is the name RADIUS profile that will be displayed inside UniFi.
2. **Authentication Servers**: This is where you enter the IP address, Port, and Shared Secret from your RADIUS authentication servers.
3. **Accounting**: This is a checkbox that enables the Accounting Servers fields.
4. **Account Servers**: This is where you enter the IP address, Port, and Shared Secret from your RADIUS accounting servers.

In most setups, the RADIUS authentication port is 1812, the RADIUS accounting port is 1813, both IP addresses will point to the same RADIUS server, and the shared secret is what you have configured on your RADIUS server.
Once you have done that, make sure to click **Apply Changes** at the bottom.

## Step 3. Create a UniFi VPN

You can create a VPN on any UniFi Gateway by using a built-in VPN server. To do this, open the UniFi Network app, and navigate to **Settings** > **VPN** > **VPN Server**. Once you have done this, click **Create New** at the bottom of the table.

![](/attachments/1728130538628-166.png)  
**Figure 2. UniFi create VPN page**

When you have done that, you will get another form, as shown in Figure 2.
The options of the form that we are interested in are:

1. **VPN Type**: Make sure you use **Open VPN** [^2]
2. **Name**: This is the name VPN profile that will be displayed inside UniFi.
3. **Advanced**: Switch this to **Manual** to enable more options.
4. **RADIUS Profile**: This is a dropdown list that contains all RADIUS profiles. Choose the profile you made in step 2.
5. **Gateway / Subnet**: Use this option to configure the IP range for your VPN clients.

If your UniFi Gateway is behind another NAT (e.g., another router) then make sure to enable **Use Alternate Address for Clients** and then fill out the input field with the WAN IP address of that router or use a public Fully Qualified Domain Name that points to your local network.

[^2]: WireGuard does not have a RADIUS option, and L2TP is not supported by several operating systems (Ubiquiti does not recommend it).
