# react-modal-xm


### Presentation

This React component displays a modal box. It allows for the display of a background, a title, a message, and a customizable close icon.


### Installation

To install the react-modal-xm component :
> `npm install @reivax8560/react-modal-xm`


### Usage

You need to import the component and also the css file.

```jsx

import Modal from "@reivax8560/react-modal-xm";
import "@reivax8560/react-modal-xm/dist/react-modal-xm.css";

function MyComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (

    {isModalOpen && (

      <Modal
        isBackgroundDisplayed={true}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        title="My modal title"
        message="My message in the modal box."
        closureFunction={() => { setIsModalOpen(!isModalOpen) }}
        closureIconSize="20px"
        classModal="my-customizable-modal-class"
        classTitle="my-customizable-title-class"
        classMessage="my-customizable-message-class"
      />
    )}
  )
}

export default MyComponent;
```


### Component props

| Prop                               | Type        | Description                                                                                                                                       |
| -----------------------------------| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------|
| isBackgroundDisplayed              | boolean     | To display a background for the screen behind the modal                                                                                           |
| backgroundColor                    | string      | The color for the background behind the modal                                                                                                     |
| title                              | string      | The content of the modal title                                                                                                                    |
| message                            | string      | The content of the modal message                                                                                                                  |
| closureFunction                    | function    | Function called when the close icon is clicked                                                                                                    |
| closureIconSize                    | string      | The font size of the closure icon                                                                                                                 |
| classModal                         | string      | By default, the modal is assigned a class, but you can define a custom class to apply your own styles (the html tag for the modal is a <div />)   |
| classTitle                         | string      | By default, the title is assigned a class, but you can define a custom class to apply your own styles (the html tag for the title is a <h2 />)    |
| classMessage                       | string      | By default, the message is assigned a class, but you can define a custom class to apply your own styles (the html tag for the message is a <p />) |



### License

This component is free to use and can be modified according to your needs.

