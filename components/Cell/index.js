import React from 'react'

const Cell = ({ 
    style,
    tooltip,
    text,
    icon,
    controlId,
    control,
    color,
    disabled
 }) => {
  return (
      <div style={{...style,color}} data-tooltip={tooltip}>
          {(text || icon) && (
              <div disabled={disabled ? true:undefined}>
                  {text && <span>{text}</span>}
                  {icon && <i className={icon}></i>}
              </div>
          )}
          {control && (
              <div
                  id={controlId}
                  disabled={disabled ? true:undefined}
              >
                  {control}
              </div>
          )}
    </div>
  )
}

export default Cell