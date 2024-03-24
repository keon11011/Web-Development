import DoubleQuotation from '../../../assets/logo/DoubleQuotation.svg'
import User01 from '../../icons/User/User01.jsx'
const CommentCard = () => {
    return (
        <div>
            <div className="md:sm:w-1/5 lg:w-2/5 p-4 flex max-w-max min-w-min h-auto flex-col rounded-xl bg-white border-2">
                <div>
                    <img
                        src={DoubleQuotation}
                        width={15}
                        alt="DoubleQuotation" />
                </div>
                <div className="p-3 w-auto justify-items-stretch rounded-lg border-b-4 border-r-4">
                    Tôi thực sự ấn tượng với nền tảng học IT này! Các khóa học rất chi tiết và dễ hiểu, đồng thời có nhiều bài thực hành giúp tăng cường kiến thức. Cộng đồng hỗ trợ cũng rất tích cực.
                </div>
                <div className="p-2 pb-0 flex items-center ">
                    <User01 width={30} height={30} className="flex rounded-full border-2 border-black"></User01>
                    <div className='pl-2'>
                        <div className="label-medium ">
                            Bùi Xuân Vĩ
                        </div>
                        <div className="flex body-small items-center">
                            Học viên của Business Analyst
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard