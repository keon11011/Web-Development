import Check from '../../icons/Interface/Check';

const InformSuccess = () => {
  return (
    <div className="bg-sematic-green justify-center items-center gap-2 px-7 py-4 label-large text-lg text-white leading-none rounded-[8px] p-10 ml-10 inline-flex shadow-lg shadow-[#90fcbd]">
      <Check 
        width="24px"
        height="24px"
      />
      Gửi yêu cầu tư vấn thành công
    </div>
  )
}

export default InformSuccess