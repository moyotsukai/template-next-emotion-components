import React, { useState } from 'react'
import PageTitle from '../ui/PageTitle'
import Select from '../ui/Select'
import { css } from '@emotion/react'

const IndexPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const options = [
    "Red",
    "Blue",
    "Green"
  ]

  return (
    <div>
      <PageTitle>
        Hello!
      </PageTitle>
      <Select placeholder="色を選択" options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}>
      </Select>
    </div>
  )
}

export default IndexPage