MuiTooltip example:

```js noeditor
import MuiTooltip from './MuiTooltip';
```

```js
const icon = {
    component: 'MuiIcon',
    iconName: 'done_all',
};

const iconButtonDownload = {
    component: 'MuiIconButtonDownload',
    href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    fileName: "cool.jpeg",
    iconButton: [{
      component: 'MuiIconButton',
      icon: [icon],
    }],
};

const content = [iconButtonDownload];

<MuiTooltip
  title="tool tip title"
  content={content}
/>
```