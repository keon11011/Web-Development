
import ba from '../../../assets/img/ba.png'
import bi from '../../../assets/img/bi.png'
import productowner from '../../../assets/img/productowner.png'
import sqladvanced from '../../../assets/img/sqladvanced.png'
import da from '../../../assets/img/da.png'
import Button from '../button/Button'

const CourseSelector = () => {
  return (
    <div className="relative flex flex-col  bg-clip-border rounded-[.95rem] bg-white">
      <div className="relative flex flex-col  border border-solid border-[#5200FF] rounded-2xl ">
        {/* <!-- card header --> */}
        <div className="px-9 p-4 flex justify-between items-stretch flex-wrap bg-transparent">
          <h3 className="m-0 flex flex-col items-start justify-center title-large text-text-primary">
            <span className="mr-3">Thêm khóa học</span>
          </h3>
        </div>
        {/* <!-- end card header -->
        <!-- card body  --> */}
        <div className="flex-auto px-9 pb-1 max-sm:hidden">
          <div className=" overflow-x-auto table-auto">
            <table className="relative w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200">
              <thead className="align-bottom" >
                <tr className="title-small text-text-secondary">
                  <th className="pb-3 px-10 py-3 text-start min-w-[175px] ">Tên khóa học</th>
                  <th className="pb-3 text-middle min-w-[100px]">Giảng viên</th>
                  <th className="pb-3 text-middle min-w-[100px]">Ngày khai giảng</th>
                  <th className="pb-3 text-middle min-w-[175px]">Học phí</th>
                </tr>
              </thead>
              <tbody>
                <tr className="body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                  <td>
                    {/* checkbox */}
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="body-medium text-text-primary  flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={ba} alt=""></img>
                          </div>
                          <div className="flex flex-col justify-start">
                            <a href="javascript:void(0)" className="mb-1 ease-in-out  ">IT Business Analysis</a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td className="text-middle items-center mb-1">
                    Ryan Nguyễn
                  </td>
                  <td className="text-middle mb-1 text-center px-2 py-1 items-center">
                    2023-08-23
                  </td>
                  <td className="px-4 py-3 text-center mb-1"> 4.000.000đ
                  </td>
                  <td className="p-1.5 pr-0 pl-0 text-middle">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="body-medium text-text-primary last:border-b-0">
                  <td>
                    {/* checkbox */}
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={productowner} alt=""></img>
                          </div>
                          <div className="flex flex-col justify-start">
                            <a href="javascript:void(0)" className="mb-1 ease-in-out"> Product Owner Master </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td className="text-middle items-center mb-1">
                    Harry Phạm
                  </td>
                  <td className="text-middle mb-1 text-center px-2 py-1 items-center">
                    2024-04-11
                  </td>
                  <td className="px-4 py-3 text-center mb-1"> 5.400.000đ
                  </td>
                  <td className="pr-0 text-middle">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className=" body-medium text-text-primary border-dashed last:border-b-0">
                  <td>
                    {/* checkbox */}
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={sqladvanced} alt=""></img>
                          </div>
                          <div className="flex flex-col justify-start">
                            <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> SQL Advanced
                            </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td className="text-middle items-center mb-1">
                    Jerry Bùi
                  </td>
                  <td className="text-middle mb-1 text-center px-2 py-1 items-center">
                    2024-02-10
                  </td>
                  <td className="px-4 py-3 text-center mb-1"> 4.914.000đ
                  </td>
                  <td className="pr-0 text-middle">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="body-medium text-text-primary border-dashed last:border-b-0">
                  <td>
                    {/* checkbox */}
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={da} alt=""></img>
                          </div>
                          <div className="flex-col justify-start">
                            <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> Data Analysis </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td className="text-middle items-center mb-1">
                    Phil Phan
                  </td>
                  <td className="text-middle mb-1 text-center px-2 py-1 items-center">
                    2023-05-31
                  </td>
                  <td className="px-4 py-3 text-center mb-1"> 4.429.000đ
                  </td>
                  <td className="pr-0 text-middle">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="body-medium text-text-primary border-dashed">
                  <td>
                    {/* checkbox */}
                    <div className="inline-flex items-center pl-5">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full"
                        for="ripple-on"
                        data-ripple-dark="true"
                      >
                        <input
                          id="ripple-on"
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="ripple-on"
                      >
                        <div className="flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={bi} alt=""></img>
                          </div>
                          <div className="flex-col justify-start">
                            <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> Business Intelligence </a>
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* hết phần checkbox */}
                  </td>
                  <td className="text-middle items-center mb-1">
                    Anh Tú
                  </td>
                  <td className="text-middle mb-1 text-center px-2 py-1 items-center">
                    2023-05-15
                  </td>
                  <td className="px-4 py-3 text-center mb-1"> 5.482.000đ
                  </td>
                  <td className="pr-0 text-middle">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="  display:flex text-right  w-full place-items-right rounded-lg p-6 ">
            <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
              <Button size="Medium" variant="Primary">Chọn</Button>
            </div>
            <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
              <Button size="Medium" variant="Plain">Thoát</Button>
            </div>
          </div>
        </div>
        <div className="hidden max-sm:grid grid-cols-1 gap-3 px-9 pb-6">
          {/* checkbox */}
          <div className="inline-flex items-center pl-5">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="ripple-on"
            >
              <div className="body-medium text-text-primary  flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                  <img src={ba} alt=""></img>
                </div>
                <div className="flex flex-col justify-start">
                  <a href="javascript:void(0)" className="mb-1 ease-in-out  ">IT Business Analysis</a>
                </div>
              </div>
            </label>
          </div>
          {/* checkbox */}
          <div className="inline-flex items-center pl-5">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="ripple-on"
            >
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                  <img src={productowner} alt=""></img>
                </div>
                <div className="flex flex-col justify-start">
                  <a href="javascript:void(0)" className="mb-1 ease-in-out"> Product Owner Master </a>
                </div>
              </div>
            </label>
          </div>
          {/* checkbox */}
          <div className="inline-flex items-center pl-5">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="ripple-on"
            >
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                  <img src={sqladvanced} alt=""></img>
                </div>
                <div className="flex flex-col justify-start">
                  <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> SQL Advanced
                  </a>
                </div>
              </div>
            </label>
          </div>
          {/* checkbox */}
          <div className="inline-flex items-center pl-5">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="ripple-on"
            >
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                  <img src={da} alt=""></img>
                </div>
                <div className="flex-col justify-start">
                  <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> Data Analysis </a>
                </div>
              </div>
            </label>
          </div>
          {/* checkbox */}
          <div className="inline-flex items-center pl-5">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-600 checked:bg-purple-600 checked:before:bg-purple-600 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              for="ripple-on"
            >
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                  <img src={bi} alt=""></img>
                </div>
                <div className="flex-col justify-start">
                  <a href="javascript:void(0)" className="mb-1 duration-200 ease-in-out"> Business Intelligence </a>
                </div>
              </div>
            </label>
          </div>
          {/* hết phần checkbox */}
        </div>
      </div>
    </div>
  )
}

export default CourseSelector