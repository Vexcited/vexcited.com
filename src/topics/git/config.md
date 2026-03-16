# My Git Config

## Global

Here's all the global configuration I use across all my projects.

```sh
git config --global gpg.format ssh
git config --global gpg.ssh.program ssh-keygen # not required, but just in case

git config --global tag.gpgSign true
git config --global commit.gpgsign true

git config --global rerere.enabled true
git config --global fetch.pruneTags true

git config --global user.name "Your NAME"
```

## Local

```sh
git config user.email "your@email.com"
git config user.signingkey "ssh-ed25519 MY_PUBLIC_KEY"
```

The adequate private key will be pulled by Bitwarden's SSH agent since I self-host Vaultwarden.
Take a look at my [`bw2ssh` CLI](https://code.vexcited.com/nodes/seed.vexcited.com/rad:z3R6nHv6KaM8MpVuXPwbttyCcc4Zo) to learn more.
