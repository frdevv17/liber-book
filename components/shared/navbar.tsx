import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { UserRound } from 'lucide-react'
import Link from 'next/link'
import { Label } from '../ui/label'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between my-4'>
            <Link href={"/"}><img src="/logo.png" alt="" /></Link>
            <div className='flex items-center gap-4'>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ruknlar" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="jaxon-adabiyoti">Jaxon adabiyoti</SelectItem>
                            <SelectItem value="uzbek-adabiyoti">Uzbek adabiyoti</SelectItem>
                            <SelectItem value="bolalar-adabiyoti">Bolalar adabiyoti</SelectItem>
                            <SelectItem value="biznes-va-psixologiya">Biznes va psixologiya</SelectItem>
                            <SelectItem value="detektivlar">Detektivlar</SelectItem>
                            <SelectItem value="fantastika">Fantastika</SelectItem>
                            <SelectItem value="diniy-adabiyot">Diniy adabiyot</SelectItem>
                            <SelectItem value="fan-talim">Fan va talim</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input className='w-[540px]' placeholder="Qidirish" />
            </div>
            <div className="flex items-center gap-4">
                <Select>
                    <SelectTrigger className='w-[80px]'>
                        <SelectValue placeholder="uz" defaultValue={"uz"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="uz">uz</SelectItem>
                            <SelectItem value="ru">ru</SelectItem>
                            <SelectItem value="en">en</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-[#3F51B5] hover:bg-[#3f51b5df]'><UserRound className='w-4 h-4 mr-2' /> Kirish</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Assalomu alaykum Xush kelibsiz!</DialogTitle>
                            <DialogDescription>
                                Hisobingizga kirish uchun login va parolni kiriting
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Input id="username" className="col-span-4" placeholder='Username' />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Input id="password" className="col-span-4" placeholder='********' />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button className='bg-[#3F51B5] hover:bg-[#3f51b5df] w-full' type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Navbar