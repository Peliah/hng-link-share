import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputBox = () => {
    return (
        <div className="mb-6">
            <Label htmlFor="email" className="font-normal text-xs">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    );
}

export default InputBox;