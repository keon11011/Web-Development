import OctagonWarning from '../../icons/Warning/OctagonWarning';

const AlertDanger = ({children}) => {
  return (
    <div className="flex w-full justify-start items-center p-[12px] gap-[12px] body-large rounded-[8px] shadow-[0_0_24px_0_rgba(144, 252, 189, 0.50)] bg-[#FFEFEF] text-[#FF4141]">
      <OctagonWarning
        width="20px"
        height="20px"
      />
      {children}
    </div>
  )
}

export default AlertDanger