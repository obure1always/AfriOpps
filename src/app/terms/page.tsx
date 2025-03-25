export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using AfriOpps, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Platform</h2>
              <p className="text-gray-600 mb-4">
                AfriOpps provides a platform for connecting users with job opportunities, internships, and scholarships across Africa. You agree to use this platform only for lawful purposes and in accordance with these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Guidelines</h2>
              <p className="text-gray-600 mb-4">
                Users must not post any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. We reserve the right to remove any content that violates these guidelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on AfriOpps, including text, graphics, logos, and software, is the property of AfriOpps and is protected by intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                AfriOpps is not responsible for any damages arising from the use or inability to use our platform. We do not guarantee the accuracy, completeness, or usefulness of any information on the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at support@afriopps.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 