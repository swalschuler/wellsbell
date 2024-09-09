# Deploy

```
cd client
npm run build
firebase deploy --only hosting
```

## Note:

    "rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ]

(Add when admin ready)
