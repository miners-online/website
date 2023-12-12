# Configuring Nextcloud to use Free IPA

## Prerequisites

The following applications need to be installed on your system

- Nextcloud
- Free IPA.

The guide will assume some details:

- Free IPA server hostname: `ipa.minersonline.lan`
- Free IPA realm domain: `mineronline.lan`

You may changes these assumptions based on your requirements.

## Steps

### 1. Step up a System User Account

The System User Account is a dedicated account that the Nextcloud instance will use to get user information from your Free IPA server.

#### 1. Login into the Free IPA web interface

Open up your browser and navigate to `https://ipa.minersonline.lan`. Accept the security warning.

If not logged in, enter your admin account details. By default, the user name is `admin` and the password is the one you gave during the Free IPA installation.

#### 2. Add the user

1. On the "Users" page click the "Add" button.

2. Set the "User login" to something explanatory, for example: `nextcloudsystemuser`.

3. The "First Name" and "Last Name" can be set to whatever you want, for example `Next Cloud`.

4. Set the password to something secure and note it down.

#### 3. Make the user an "admin"

The new user needs to be an admin so it can be used to receive information about all users.

1. Click on the `nextcloudsystemuser` user on the "Active Users" page.

2. Open the "User Groups" tab.

3. Click on the "Add" button.

4. Click the checkbox next to "admins".

5. In the middle of the dialog press the button pointing to the right ">".

6. Finally, press "Add".

### 2. Configure Nextcloud LDAP / AD Integration

#### 1. Enable / Install the "LDAP user and group backend" app

The "LDAP user and group backend" app is used to provide LDAP support for Nextcloud.

1. Go to the Nextcloud apps page and enable the "
   LDAP user and group backend" app. Optionally, I recommend installing the "Write support for LDAP" and the "
   LDAP Contacts Backend" app.

#### 2. Configure LDAP / AD connection settings

1. Open the "Administration Settings" page and go to the "LDAP / AD integration" page.

2. In the "Host" field enter your Free IPA server's hostname, for example: `ipa.minersonline.lan`. If your running your Nextcloud in Docker then you may need to use the server's IP address instead.

3. Set the "Port" field to `389`.

4. Set the "User DN" to `uid=nextcloudsystemuser,cn=users,cn=accounts,dc=minersonline,dc=lan`

   > [!NOTE]
   > The `nextcloudsystemuser` part is the "User Login" we set earlier.
   >
   > The `dc=minersonline,dc=lan` part depends on your Free IPA realm domain. For example if your domain is `office.example.com` then you would use `dc=office,dc=example,dc=com`.

5. Set the "Password" to what you noted down earlier.

6. Then press "Save Credentials".

7. Set the "One Base DN per line" to `dc=minersonline,dc=lan`

   > [!NOTE]
   > Again, The `dc=minersonline,dc=lan` part depends on your Free IPA realm domain. For example if your domain is `office.example.com` then you would use `dc=office,dc=example,dc=com`.

8. Finally, press "Continue".

#### 3. Configure LDAP Groups

1. On the same page click on the "Groups" tab.

2. Click the "Edit LDAP Query" link.

3. In the "Edit LDAP Query" text box type: `(|(cn=ipausers))`. This filter will add the `ipausers` group from the Identity > Groups page on the Free IPA interface.

#### 4. Configure LDAP Login Attributes

1. On the same page click on the "Login Attributes" tab.

2. Click the "Edit LDAP Query" link.

3. In the "Edit LDAP Query" text box type: `(&(objectclass=*)(uid=%uid))`.

4. Finally, press "Continue".

#### 5. Configure Advanced Settings

1. On the same page click on the "Advanced" tab.

2. Open up the "Directory Settings" section.

3. Inside the "Base User Tree" type `cn=users,cn=accounts,dc=minersonline,dc=lan`.

   > [!NOTE]
   > Again, The `dc=minersonline,dc=lan` part depends on your Free IPA realm domain. For example if your domain is `office.example.com` then you would use `dc=office,dc=example,dc=com`.

4. Inside the "Base Group Tree" type `cn=groups,cn=accounts,dc=minersonline,dc=lan`.

   > [!NOTE]
   > Again, The `dc=minersonline,dc=lan` part depends on your Free IPA realm domain. For example if your domain is `office.example.com` then you would use `dc=office,dc=example,dc=com`.

5. Set the "Group-Member association" to `member`.

6. Open up the "Special Attributes" section.

7. Make sure the "Email Field" is set to `mail`.

8. Set the "User Home Folder Naming Rule" to `cn`.

9. Finally press "Test Configuration". If all settings are good then a "Valid configuration, connection established!" message should be displayed.
