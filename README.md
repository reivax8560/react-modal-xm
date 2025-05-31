# react-modal-xm


### Presentation

This React component displays a modal box. It allows for the display of a background, a title, a message, and a customizable close icon.


### Installation

This component requires prior installation of the fontawesome library :
> `npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons`

To install the react-modal-xm component :
> `npm install react-modal-xm`


### Usage

import :
`import Modal from "./Modal";`

and use as :

```jsx
function App() {
  return (
    <Modal
      isBackgroundDisplayed={true}
      classBackgroundColor="rgba(0, 0, 0, 0.5)"
      title="Modal Title"
      message="This is a message in the modal box."
      closureFunction={() => console.log("Modal closed")}
      closureIconSize="20px"
      classModal="custom-modal"
      classTitle="custom-title"
      classMessage="custom-message"
    />
  );
}

export default App;
```


### Component props

| Prop                               | Type        | Description                                                                                                    |
| -----------------------------------| ----------- | ---------------------------------------------------------------------------------------------------------------|
| isBackgroundDisplayed              | boolean     | To display a background for the screen behind the modal                                                        |
| classBackgroundColor               | string      | The color for the screen background                                                                            |
| title                              | string      | The content of the modal title                                                                                 |
| message                            | string      | The content of the modal message                                                                               |
| closureFunction                    | function    | Function called when the close icon is clicked                                                                 |
| closureIconSize                    | string      | The font size of the closure icon                                                                              |
| classModal                         | string      | By default, the modal is assigned a class, but you can define a custom class to apply your own styles          |
| classTitle                         | string      | By default, the title is assigned a class, but you can define a custom class to apply your own styles          |
| classMessage                       | string      | By default, the message is assigned a class, but you can define a custom class to apply your own styles        |



### License

This component is free to use and can be modified according to your needs.

