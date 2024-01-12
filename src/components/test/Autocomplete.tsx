import React, { useState } from 'react'

const YourComponent = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])
  const availableKeywords = [] // 假设你有可用的关键词

  const handleInputChange = e => {
    const inputValue = e.target.value
    setInput(inputValue)

    if (inputValue.length) {
      const filteredResults = availableKeywords.filter(keyword =>
        keyword.toLowerCase().includes(inputValue.toLowerCase())
      )
      setResult(filteredResults)
    } else {
      setResult([])
    }
  }

  return (
    <div>
      <input
        id="input-box"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <div className="result-box">
        {result.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default YourComponent
