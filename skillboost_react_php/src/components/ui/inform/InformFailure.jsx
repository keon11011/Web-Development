import Triangle_Warning from '../../icons/Warning/TriangleWarning';

const InformFailure = () => {
  return (
    <div className="bg-sematic-red justify-center items-center gap-2 px-7 py-4 border label-large text-lg text-white leading-none rounded-[8px] p-10 ml-10 inline-flex shadow-2xl">
      <Triangle_Warning
        width="24px"
        height="24px"
      />
      Gửi yêu cầu tư vấn thất bại
    </div>
  )
}

export default InformFailure