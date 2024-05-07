const bgColor = {
  main: '#5865f2',
  side: '#23a559'
}

const logoColor = {
  main: '#dbdee1',
  side: '#23a559'
}

function ButtonComponent({type, icon, children}) {
  let buttonStyle = `group flex justify-center items-center cursor-pointer w-12 h-12 bg-[#313338] rounded-[50%] hover:rounded-[15px] hover:bg-[${bgColor[type]}] duration-200`
  let svg = `bi bi-${icon} group-hover:fill-[#dbdee1]`
  console.log(buttonStyle)
  return (
    <div className={buttonStyle}>
      <svg fill={logoColor[type]} className={svg} width="28" height="28" viewBox="0 0 16 16">
        {children}
      </svg>  
    </div>
  )
}

export default ButtonComponent  