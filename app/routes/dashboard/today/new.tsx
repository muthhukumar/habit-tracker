import VisuallyHidden from '@reach/visually-hidden'
import Dialog from '@reach/dialog'
import { useNavigate } from 'remix'

export default function Modal() {
  const navigation = useNavigate()
  const goBack = () => navigation(-1)
  return (
    <div>
      <Dialog isOpen={true} onDismiss={goBack}>
        <button className="close-button" onClick={goBack}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}
