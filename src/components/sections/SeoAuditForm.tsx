'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import claimfree from '../../../public/imgs/claim-free.svg';

export default function SeoAuditForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/seo-audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('Thank you! We will contact you soon.');
                setFormData({ name: '', email: '', website: '' });
            } else {
                setSubmitMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage('Error submitting form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="seo-audit-form-section">
            <div className="container">
                <div className="seo-audit-wrapper">
                    <div className="seo-audit-left">
                        <h2 className="font-aloevera">
                            CLAIM YOUR FREE<br />
                            SEO AUDIT TODAY
                        </h2>
                        <div className="seo-audit-image">
                            <Image
                                src={claimfree}
                                alt="SEO Audit"
                                width={440}
                                height={120}
                                priority
                            />
                        </div>
                    </div>

                    <div className="seo-audit-right">
                        <form onSubmit={handleSubmit} className="seo-audit-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="seo-audit-input"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="seo-audit-input"
                            />

                            <input
                                type="url"
                                name="website"
                                placeholder="Your Website URL*"
                                value={formData.website}
                                onChange={handleChange}
                                required
                                className="seo-audit-input"
                            />

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="seo-audit-submit"
                            >
                                {isLoading ? 'SUBMITTING...' : 'CONTACT US'}
                            </button>

                            {submitMessage && (
                                <p className={`seo-audit-message ${
                                    submitMessage.includes('Thank you') ? 'seo-audit-message-success' : 'seo-audit-message-error'
                                }`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
