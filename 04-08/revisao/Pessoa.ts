export class Pessoa {
    private name: string;
    private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public getName(): string {
		return this.name;
	}

	public setName(value: string) {
		this.name = value;
	}

	public getAge(): number {
		return this.age;
	}

	public setAge(value: number) {
		this.age = value;
	}
}