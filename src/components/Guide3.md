Import the theme file from "/tether-shepherd/dist/css/shepherd-theme-dark.css"

```javascript
<div style={{ height: "100px", width: "100%" }}>
  <Guide className="shepherd-theme-dark">
    <div style={{ position: "relative" }}>
      Something
      <Step
        order={1}
        title="Welcome"
        text="Check this div, it has important content"
        position="bottom"
        show
      />
    </div>
    <div style={{ position: "relative", width: "100px" }}>
      <Step
        order={2}
        title="Next Step"
        text="Check this div, it has important  content too"
        position="top"
      />
      Other Important thing
    </div>
    <button />
  </Guide>
</div>
```
