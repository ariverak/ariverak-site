import App from 'next/app'
import '~/_styles.scss';

export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles')
    if (style) {
      style.parentNode.removeChild(style)
    }
  }
}