import Image from 'next/image'

export default function CoreValues() {
    return (
        <section className="w-full">
            <div className="container mx-auto px-8 md:px-8 lg:px-40">
                <div className="relative w-full aspect-video">
                    <Image
                        src="/images/corevalues.png"
                        alt="Giá trị cốt lõi NEMARK"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
