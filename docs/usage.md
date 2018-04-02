# Basics


### Guide
To use the guide, import it from the library

`import Guide from "react-shepherd;"`

Import the styles from the tether-shepherd package, or create a custom style css file

`import "tether-shepherd/dist/css/shepherd-theme-dark.css";`

>  Don't forget to set the appropriated theme Prop to apply the class to the tooltips

Wrap your app component where you wish to add the tour with Guide

```javascript
    const MainApp = () =>
        <Guide theme="shepherd-theme-dark">
            <App/>
        </Guide>
```



### Step
To create a step use the following markup:

 ```javascript
 <div> 
    <Step
      order={1}
      title="Welcome"
      text="Check this div, it has important content"
      position="bottom"
      show
    />
    This is important and part of the tutorial
</div>

```

order  is the step order in the guide, when advancing to the next step, it will always go in the order steps. 

show forces the tooltip to display on load

position  can be one of the following "left | right | middle | top"




