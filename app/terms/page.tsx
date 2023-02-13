import t from "../terms/Terms.module.scss";
import Head from "next/head";

const page = () => {
  return (
    <>
      <div className={t.termsContainer}>
        <div className={t.termsWrapper}>
          <div className={t.allTerms}>
            <div>
              <h1 className={t.title}>Terms of Use Agreement</h1>
              <p>Terms and Conditions for Tendenya Communications CC</p>
            </div>
            <div>
              <h3 className={t.termsTitle}>Introduction:</h3>
              <p>
                These terms and conditions (“Terms”) govern your use of the web
                development services provided by Tendenya Communications
                (“Company”, “we” or “us”). By accessing or using the services,
                you agree to be bound by these Terms.
              </p>{" "}
              <h3 className={t.termsTitle}>User Information:</h3>{" "}
              <p>
                We collect information from you in order to provide our
                services. This information may include your name, address,
                email, and payment information. We use this information to
                deliver the services and to communicate with you.
              </p>
              <h3 className={t.termsTitle}>Data Protection:</h3>{" "}
              <p>
                We take the protection of your data very seriously. We implement
                appropriate technical and organizational measures to protect
                your information from unauthorized access, alteration, or
                destruction.
              </p>{" "}
              <h3 className={t.termsTitle}>Use of Information:</h3>{" "}
              <p>
                We may use your information for the following purposes: to
                provide our services, to communicate with you, to improve our
                services, and to comply with legal requirements.
              </p>{" "}
              <h3 className={t.termsTitle}>Sharing of Information: </h3>{" "}
              <p>
                We will not share your information with any third party except
                in the following circumstances: with your consent, to comply
                with legal requirements, or to protect our rights.
              </p>
              <h3 className={t.termsTitle}>Data Retention:</h3>{" "}
              <p>
                {" "}
                We will retain your information for as long as necessary to
                provide our services and to comply with legal requirements.
              </p>
              <h3 className={t.termsTitle}> Changes to Terms:</h3>
              <p>
                {" "}
                We may modify these Terms at any time. Your continued use of the
                services following any such modification constitutes your
                agreement to be bound by the modified Terms.{" "}
              </p>
              <h3 className={t.termsTitle}>Termination:</h3>{" "}
              <p>
                We may terminate these Terms at any time for any reason. Upon
                termination, you must immediately cease using our services.
              </p>
              <h3 className={t.termsTitle}>Disclaimer:</h3>{" "}
              <p>
                Our services are provided on an “as is” basis. We make no
                representations or warranties of any kind, express or implied,
                regarding the use or the results of the services in terms of
                accuracy, reliability, or otherwise.
              </p>{" "}
              <h3 className={t.termsTitle}>Limitation of Liability:</h3>{" "}
              <p>
                Under no circumstances will we be liable for any damages
                resulting from the use of our services.
              </p>{" "}
              <h3 className={t.termsTitle}>Governing Law:</h3>
              <p>
                These Terms will be governed by and construed in accordance with
                the laws of The Republic South Africa, without giving effect to
                any principles of conflicts of law.
              </p>
              <h3 className={t.termsTitle}>Contact Information:</h3>
              <p>
                {" "}
                If you have any questions about these Terms, please contact us
                at info@tendenya.co.za. By using our services, you acknowledge
                that you have read and understood these Terms and agree to be
                bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
