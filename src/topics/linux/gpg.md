# GPG

## Generate a Key Pair

You'll be prompted your real name, an email address linked
to the key and a passphrase, of course!

```sh
gpg --gen-key
```

## List all keys

```sh
gpg --list-keys

# You can also list them with the short keyid format.
gpg --list-keys --keyid-format short
```

## Delete a generated key

> https://stackoverflow.com/a/78464745
