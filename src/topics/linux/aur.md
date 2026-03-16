# AUR

## Create a package

Take a look at ["Creating an AUR Package"][create-aur] !

## Update a package

> Based on ["Creating an AUR Package"][create-aur]

```sh
# update checksums
updpkgsums

# update srcinfo
makepkg --printsrcinfo > .SRCINFO

# push to aur
git add PKGBUILD .SRCINFO
git commit -m "v2026.3.1"
git push
```

[create-aur]: https://gist.github.com/keilmillerjr/dbfd9d60b2cd5fb440274c0a67a7db18
