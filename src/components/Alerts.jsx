import React from 'react'

export default function Alerts(props) {

    const cap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {`${cap(props.alert.type)}, `}{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
