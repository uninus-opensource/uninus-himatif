"use client";
import { FC, ReactElement } from "react";
import { TextField } from "@/components";
import { useForm } from "react-hook-form";

const About: FC = (): ReactElement => {
  const { control } = useForm({
    defaultValues: {
      name: "Maulana Sodiqin"
    }
  })
  return (
     <form className="flex flex-col gap-y-2 px-6">
       <TextField 
         required 
         control={control} 
         name={"name"} 
         label="Nama Lengkap" 
         placeholder="Masukkan Nama Anda" 
         variant="lg" 
         message="Berhasil Memvalidasi"
         status="success"
       />
       <TextField 
         required 
         control={control} 
         name={"name"} 
         label="Nama Lengkap" 
         placeholder="Masukkan Nama Anda" 
         variant="md" 
         message="Gagal tidak valid"
         status="error"
       />
       <TextField 
         required 
         control={control} 
         name={"name"} 
         label="Nama Lengkap" 
         placeholder="Masukkan Nama Anda" 
         variant="sm" 
         message="Kurang banyak"
         status="warning"
       />
       <TextField 
         required 
         type="password"
         control={control} 
         name={"name"} 
         label="Kata Sandi" 
         placeholder="Masukkan Nama Anda" 
         variant="lg" 
         message="Berhasil Memvalidasi"
         status="none"
         hint="Password setidaknya ada 8 karakter"
       />
     </form>
  );
};

export default About;
