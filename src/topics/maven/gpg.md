# GPG

> https://central.sonatype.org/publish/requirements/gpg

Using GPG is a requirement to deploy anything in Maven Central repositories.

## Set up!

First, you have to [create a key](../linux/gpg.md#generate-a-key-pair).
Then, let's retrieve the key.

```console
$ gpg --list-signatures --keyid-format 0xshort

[keyboxd]
---------
pub   ed25519/0xF5E057B0 2025-11-21 [SC] [expires: 2028-11-20]
      215C55BC1A753B19EA1EB222E61813EBF5E057B0
uid           [ultimate] Mikkel ALMONTE--RINGAUD <mikkel.almonteringaud@literate.ink>
sig 3        0xF5E057B0 2025-11-21  [self-signature]
sub   cv25519/0xCC1E0D5B 2025-11-21 [E] [expires: 2028-11-20]
sig          0xF5E057B0 2025-11-21  [self-signature]
```

Here, the key we'll use will be `0xF5E057B0`.
Let's open `~/.gradle/gradle.properties`.

```
signing.keyId=0xF5E057B0
signing.password=YOUR_GPG_KEY_PASSPHRASE
signing.secretKeyRingFile=/Users/REDACTED/.gnupg/secring.gpg
```

We'll have to distribute our key after this.

```console
$ gpg --keyserver keys.openpgp.org --send-keys 215C55BC1A753B19EA1EB222E61813EBF5E057B0
gpg: sending key E61813EBF5E057B0 to hkp://keys.openpgp.org
```

For the `secretKeyRingFile` to be found, we'll have to regenerate our `secring.gpg`.

```sh
gpg --keyring secring.gpg --export-secret-keys > ~/.gnupg/secring.gpg
```

## Use in CI

We'll have to use in memory GPG key with environments variables.

> https://vanniktech.github.io/gradle-maven-publish-plugin/central/#in-memory-gpg-key

```sh
gpg --export-secret-keys --armor 215C55BC1A753B19EA1EB222E61813EBF5E057B0
```

Copy the full output inside the `ORG_GRADLE_PROJECT_signingInMemoryKey` env.
