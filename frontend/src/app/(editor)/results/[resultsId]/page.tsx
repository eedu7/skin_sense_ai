
interface Props {
    params: Promise<{ resultsId: string }>
}

export default async function Page({ params }: Props) {
    const { resultsId } = await params;
    return (
        <div>ResultsId: {resultsId}</div>
    )
}
