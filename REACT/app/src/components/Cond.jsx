import React from 'react'

const Cond = (props) => {
    return (
        <div>

            <h1 class='flex justify-center'>Ternary Operator</h1>

            <ul>
                <Conditional name='apple' isStoked={true} />
                <Conditional name='apple' isStoked={false} />
                <Conditional name='apple' isStoked={true} />
                <Conditional name='apple' isStoked={false} />
                <Conditional name='apple' isStoked={true} />
            </ul>
        </div>
    )
}

export default Cond

export const Conditional = ({ name, isStoked }) => {
    return (
        <div>
            {isStoked ? name + '✔' : name + '❌'}
        </div>
    )
}