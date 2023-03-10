---
publishDate: 'Feb 28 2023'
title: 'Send files using SCP'
image: '~/assets/images/scp.webp'
category: 'Tutorials'
tags: ['scp', 'web', 'server']
---

SCP (secure copy) is a command-line utility that allows you to securely transfer files and folders between your local machine and a remote server, or vice versa. It uses the SSH protocol to encrypt the data and authenticate the user, making it a secure alternative to FTP and other file transfer methods.


### ⬆️ Uploading Files and Folders
To upload a file or folder to a remote server using SCP, use the following syntax:

```
scp [local file or folder] [username]@[remote server]:[remote destination]
```

For example, to upload a file called "myfile.txt" from your local machine to the remote server "example.com" in the folder "myfolder", you would use the following command:

```
scp myfile.txt user@example.com:/myfolder
```

### ⬇️ Downloading Files and Folders
To download a file or folder from a remote server using SCP, use the following syntax:

```
scp [username]@[remote server]:[remote file or folder] [local destination]
```

For example, to download a file called "myfile.txt" from the remote server "example.com" in the folder "myfolder" to your local machine, you would use the following command:

```
scp user@example.com:/myfolder/myfile.txt .
```

### ⚙️ SCP options

-r option allows you to copy recursively the folders

```
scp -r [local folder] [username]@[remote server]:[remote destination]
```

-P option allows you to specify a port different than the default (22)

```
scp -P [port] [local file or folder] [username]@[remote server]:[remote destination]
```

### 💡 Conclusion
SCP is a powerful and versatile tool for transferring files and folders between your local machine and a remote server. By using the SCP command, you can ensure that your data is transferred securely and efficiently. Whether you're uploading or downloading files and folders, the process is simple and straightforward.