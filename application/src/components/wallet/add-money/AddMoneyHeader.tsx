import { ArrowLeftIcon } from '@/components/icons/ArrowLeft'
import NavigateBack from '@/hooks/Navigate.back'
import React from 'react'
import styles from './styles/addMoneyHeader.module.css'

const AddMoneyHeader = ({template = "Template"} :{template?: string}) => {
  return (
    <div>
      <div className={styles.addMoneyTemplate}>
        <NavigateBack styles={{height: 17, width: 17, marginRight: "15px"}}>
          <ArrowLeftIcon height={17} width={17} fill='#d9d9d9' />
        </NavigateBack>
        <div>{template}</div>
        {/* <div>₹0 available</div> */}
      </div>
    </div>
  )
}

export default AddMoneyHeader
