import React from 'react'

export default function VocabularyForm() {
  return (
    <form>
      <input type="text" placeholder='Das Wort' />
      <input type="text" placeholder='Die Bedeutung' />
      <textarea cols="45" rows="5" placeholder='Das Beispiel'></textarea>
      <button>Speichern</button>
    </form>
  )
}
