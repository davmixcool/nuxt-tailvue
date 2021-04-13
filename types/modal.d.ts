declare interface ModalInterface {
    /**
     * Show a modal
     * @link https://github.com/acidjazz/tv-modal
     *
     * @param properties
     */
    show(properties: ModalInterfaceProps): void
}

interface ModalInterfaceProps {
    /**
     * Different types show different icons and colors
     */
    type: string
    // type: 'success' | 'info' | 'danger' | 'warning'
    /**
     * Modal title
     */
    title: string
    body: string
    primary: ModalButton
    secondary: ModalButton
}

interface ModalButton {
    /**
     * Button text
     */
    label: string
    /**
     * Button theme
     * @link https://github.com/acidjazz/tv-button
     */
    theme: string
    // theme: 'white' | 'indigo' | 'indigo-light' | 'indigo-dark' | 'red' | 'green'
    action: Function,
}

export default ModalInterface
