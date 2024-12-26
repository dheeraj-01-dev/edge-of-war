import React from 'react'
import styles from './styles/advanceOptions.module.css'
import toast from '@/scripts/toast'

interface advanceOptions {
    advanceOption: battleType["settings"]["advanceSetting"]
};

interface selectOption {
    label: string,
    value: string | number
}
interface radioInput {
    label: string,
    value: string,
}
interface radioInputTag {
    label: string,
    value: string,
    option: string[]
}

const SelectOption :React.FC<selectOption> = ({ label, value })=>{
    return (
        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <label style={{marginLeft: "30%"}} className={styles.label} htmlFor={label}>
                {label}:{" "}
            </label>
            <select className={styles.select} name={label}>
                <option value={value}>{value}</option>
            </select>
        </div>
    )
};

const RadioInputTag :React.FC<radioInputTag> = ({ label, value, option })=>{
    return(
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div style={{marginLeft: "30%"}}>
                <label className={styles.label} style={{marginRight: 20}} htmlFor={label}>{label}: </label>
            </div>
            <div>
                <input defaultChecked={value===option[0]} value={option[0]} style={{marginRight: 5}} type="radio" name={label} />
                <label style={{marginRight: 20}} htmlFor={option[0]}>{option[0]}</label>
                <input defaultChecked={value===option[1]} value={option[1]} style={{marginRight: 5}} type="radio" name={label} />
                <label htmlFor={option[1]}>{option[1]}</label>
            </div>
        </div>
    )
}

const RadioInput :React.FC<radioInput> = ({ label, value })=>{
    
    if(label==="Zone Shrink Speed"){
        return( 
            <RadioInputTag label={label} value={value} option={["Fast", "Standard"]} />
        );
    }

    switch (value) {
        case "Limited":
        case "Un-Limited":
            return( 
                <RadioInputTag label={label} value={value} option={["Limited", "Un-Limited"]} />
            )
            break;
        case "High":
        case "Standard":
            return( 
                <RadioInputTag label={label} value={value} option={["High", "Standard"]} />
            )
            break;

        case "Day":
        case "Night":
            return( 
                <RadioInputTag label={label} value={value} option={["Day", "Night"]} />
            )
            break;

        case "Yes":
        case "No":
            return( 
                <RadioInputTag label={label} value={value} option={["Yes", "No"]} />
            )
            break;
    
        default:
            return(
                <div></div>
            )
            break;
    }
}

const AdvanceOptions :React.FC<advanceOptions> = ({ advanceOption }) => {
    
    const advanceOptionKeysArray1 = Object.keys(advanceOption);

const fun = (arr :any, col:number)=>{
    const rows = Math.ceil(arr.length/col);

    const arr2 = Array.from({ length: rows }).map((_, index)=>{
        return Array.from({ length: col }).map((_, index2)=>{
            return arr[index + (rows*index2)]
        })
    });
    return arr2.join().trim().split(",");
}

const advanceOptionKeysArray = fun(advanceOptionKeysArray1.slice(6), 3);

  return (
    <div className={styles.container}>
        <div className={styles.shader}></div>
        <div style={{ paddingBottom: 20, borderBottom: "2px solid var(--bg-1)" }} className={styles.keyValuePairs}>
            {
                advanceOptionKeysArray1.slice(0, 6).map((value, index)=>{
                    return(
                        <SelectOption key={value} label={value} value={advanceOption[value]} />
                    )
                })
            }
        </div>
        <div style={{paddingTop: 20}} className={styles.keyValuePairs}>
            {
                advanceOptionKeysArray.map((value, index)=>{
                    return(
                        <RadioInput key={value} label={value} value={advanceOption[value]} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AdvanceOptions