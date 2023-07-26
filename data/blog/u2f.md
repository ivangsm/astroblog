---
publishDate: 'Sep 24 2021'
title: 'Auth with U2F Keys in Linux'
image: '~/assets/images/u2f.png'
category: 'Tutorials'
tags: ['U2F', 'Fido', 'Key', 'Yubico']
---

#### 🤔 What is a FIDO U2F Key?

Universal 2nd Factor (U2F) is an open standard that strengthens and simplifies two-factor authentication (2FA) using specialized Universal Serial Bus (USB) or near-field communication (NFC) devices.

The main use of these keys is as a means of two-factor authentication on various websites that support them. However, in our operating systems they can also be used as a two-factor authentication method or as a direct replacement for our passwords in certain applications.

This time, I will show you how to configure these keys in Arch Linux.


### How to install?

#### Installation in Arch Linux

We need to install the package named **pam-u2f** with our package manager

```sh
sudo pacman -S pam-u2f
# or using yay
yay -S pam-u2f
```

After the installation, we need to create a file that contains our key or keys

```sh
touch u2f_keys
pamu2fcfg > u2f_keys
# maybe ask for our key pin or setting one if is a new key

# if you need to add more keys before the first command you need to use
pamu2fcfg -n >> u2f_keys
```
We have to copy that file to an easy access dir, if you use an encrypted home partition this file must be out of home to work correctly in this case I copy the file to /etc dir

```sh
sudo cp u2f_keys /etc/u2f_keys
```

#### ⚙️ Setting up

Now we need no modify some files in our **pam.d** dir to allow using our keys as a replacement for our passwords, I set up in 3 files

* /etc/pam.d/sudo **(to use sudo in our entire system)**
* /etc/pam.d/gdm-password **(to allow login to us in GDM)**
* /etc/pam.d/polkit-1 **(to graphical authorizations)**

In our favorite text editor, we need to paste the follow text after the first line of each file

`auth       sufficient                  pam_u2f.so      authfile=/etc/u2f_keys cue`

The previous text allows replacing writing the password in favor of the key, if we need to add a 2FA for more security we must change the word **sufficient** to **required** always asking us for our password and to insert and touch the device.

`auth       required                  pam_u2f.so      authfile=/etc/u2f_keys cue`

#### Example

![sudo nvim /etc/pam.d/sudo](https://res.cloudinary.com/ivansalazar/image/upload/v1632465748/Screenshot-20210924014206-868x581.png)

Now if we try to use sudo

![trying to use sudo](https://res.cloudinary.com/ivansalazar/image/upload/v1632465919/Screenshot-20210924014438-868x581.png)


#### 🐰🥕 That's all folks

With this, you're being able to use your u2f key(s) instead of your password to log in and authorize some process in your system. The package is available in all Linux distributions, maybe only changing the name.

This works for gnome, in other desktop environments the files needed to modify can change.

#### 🙋 Get in touch

If you have any questions or suggestions I will be happy to read them, you can email me to [me@ivansalazar.dev](mailto:me@ivansalazar.dev)


