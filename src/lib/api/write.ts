interface WriteRequest {
	title: string;
	content: string;

	category: string;
}

interface WriteResponse {
	id: string;
}

export const write = async (req: WriteRequest) => {
	const res = await fetch('https://blog-api.qwerty.place/v1/write', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(req)
	});

	if (!res.ok) {
		throw new Error('Failed to write');
	}

	return (await res.json()) as WriteResponse;
};
