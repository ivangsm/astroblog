---
publishDate: 'Jun 02 2023'
title: 'Install Arch Linux the easy way'
image: '~/assets/images/arch.png'
category: 'Tutorials'
tags: ['linux', 'archlinux', 'arch']
---

## 🐧 Installing Arch Linux the Easy Way 

Welcome to the guide on how to install Arch Linux using the archinstall script. Arch Linux is a lightweight and highly customizable operating system that has gained popularity among Linux enthusiasts. By following this guide, you'll be able to install Arch Linux effortlessly and have a fully functional system. Let's get started! 💻

🚀 Before we begin, make sure you have a bootable Arch Linux USB drive ready. If you're using Linux, you can create one by following the official Arch Linux installation guide. I recommend using the `dd` command. If you're using a different operating system, a tool like Balena Etcher can be useful.

Step 1️⃣: Booting into the Arch Linux Environment
Insert the Arch Linux USB drive into your computer and reboot. Ensure that your system is set to boot from the USB drive. Once the Arch Linux environment loads, you'll see a command prompt, which means we're ready to proceed. 🖥️💨

#### ⚙️ Configure the Keyboard

If you're using a Latin-American layout keyboard and want to ensure the correct keyboard layout, use the following command, as the default keyboard layout is US.

```bash
loadkeys la-latin1
```

#### 🛜 Connect to Wi-Fi

If you're installing Arch Linux on a laptop and need to connect to a wireless network, you must unblock the wireless devices first:

```bash
rfkill unblock all
```

Once the wireless devices are unblocked, you can connect to your network using `iwctl`:

```bash
iwctl --passphrase PASSWORD station wlan1 connect SSID
```

If you're unsure about the name of your station or the available networks, you can enter the interactive mode:

```bash
iwctl
[iwd]# device list
[iwd]# station STATION_NAME scan
[iwd]# station STATION_NAME get-networks
[iwd]# station STATION_NAME connect SSID
```

#### 💻 Install the System

After connecting to the network, the final step is running the `archinstall` script. This script provides a text-based user interface (TUI) and guides you through the installation process. It's designed to be intuitive and straightforward. Simply follow the steps until you reach the end, and you'll have a fully usable Arch Linux system.

By following this guide, you can install Arch Linux using the archinstall script without much effort. Enjoy exploring and customizing your new Arch Linux system!


