import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputBox = () => {
    return (
        <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    );
}

export default InputBox;