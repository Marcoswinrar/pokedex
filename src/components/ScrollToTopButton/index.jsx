import { useEffect, useState } from 'react'
import * as S from './styled'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    showButton && (
      <S.Container>
        <S.Button title="Ir para o topo" onClick={goToTop} />
      </S.Container>
    )
  )
}

export default ScrollToTopButton
