# Seeding

At <https://seed.vexcited.com>, I seed only repositories of mine and my GitHub organizations.

## Seed a repository

```sh
rad seed <rid>
```

## Pin in web explorer

```sh
rad config push web.pinned.repositories <rid>

# might have to restart the http service.
sudo systemctl restart radicle-httpd
```
