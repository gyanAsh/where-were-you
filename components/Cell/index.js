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
      <div className="flex flex-col justify-center items-center gap-2 w-full bg-white" style={{...style,color}} data-tooltip={tooltip}>
          {(text || icon) && (
              <div className="flex gap-2" disabled={disabled ? true:undefined}>
                  {text && <span>{text}</span>}
                  {icon && <i className={icon}></i>}
              </div>
          )}
          {control && (
              <div
                  id={controlId}
                  disabled={disabled ? true : undefined}
                  className="h-72 w-full bg-cyan-200"
              >
                  {control}
              </div>
          )}
    </div>
  )
}

export default Cell