import React, { useState } from 'react';

import BackgroundGradient from '../assets/img/BackgroundGradient.svg';
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg';

import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button';

const DangNhap = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <img
        src={BackgroundGradient}
        alt="Background"
        className="absolute inset-0 z-0"
      />
      <img
        src={SkillboostLogo}
        alt="SkillboostLogo"
        className="absolute top-[80px] left-[750px] h-16 w-auto"
      />

      <div className="relative z-10 bg-background-primary w-[540px] p-[36px] rounded-2xl shadow-md flex flex-col items-center justify-center space-y-[36px]">
        <div className="flex flex-col space-y-8 w-full">
          <div className="flex w-full justify-center headline-small text-text-primary">
            Đăng nhập
          </div>
          <form className="w-full space-y-[36px]">
            <div className="flex flex-col space-y-8">
              <TextInput title="Email" previewText="Email" />
              <TextInput title="Mật khẩu" previewText="Mật khẩu" />
            </div>
            <div className="flex justify-center">
              <Button size="Big">Đăng nhập</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DangNhap;
