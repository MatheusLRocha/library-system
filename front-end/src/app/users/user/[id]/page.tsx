export default async function PageUser({ params }: { params: Promise<{slug: string}> }) {
    const { slug } = await params;

    return (
        <div>User { slug }</div>
    );
}