export default function checkRequestBodyValue(body: any, key: string): boolean {
	return body.hasOwnProperty(key) && body[key] !== undefined && body[key] !== null;
}