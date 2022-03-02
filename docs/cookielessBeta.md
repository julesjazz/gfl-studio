How to install the beta
Open up your studios package.json and modify the version numbers of the @sanity studio dependencies, eg from:

```json
"@sanity/base": "^2.27.1",
"@sanity/core": "^2.27.0",
"@sanity/default-layout": "^2.27.1",
"@sanity/default-login": "^2.27.0",
"@sanity/desk-tool": "^2.27.1",
"@sanity/vision": "^2.27.1",
```
to:
```json
"@sanity/base": "cookieless-auth",
"@sanity/core": "cookieless-auth",
"@sanity/default-layout": "cookieless-auth",
"@sanity/default-login": "cookieless-auth",
"@sanity/desk-tool": "cookieless-auth",
"@sanity/types": "cookieless-auth",
"@sanity/vision": "cookieless-auth",
```
