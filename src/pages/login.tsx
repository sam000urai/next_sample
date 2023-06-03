import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../plugins/firebase';
import { signInWithGoogle } from '../plugins/firebase';
import Layout from '@/components/Layout';

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // ログイン成功後にUserProfileページにリダイレクトします
                router.push('/userprofile');
            }
        });

        // アンマウント時にリスナーをクリーンアップします
        return () => unsubscribe();
    }, [router]);

    const handleGoogleLogin = async () => {
        const result = await signInWithGoogle();
        if (result === "success") {
            router.push('/userprofile');
        } else {
            setError("Googleログインに失敗しました。");
        }
    };

    // const handleLineLogin = () => {
    //     // LINEログインのロジックを実装します
    // };

    return (
        <Layout>
            <h1>ログインページ</h1>
            <button onClick={handleGoogleLogin}>Googleでログイン</button>
            {/* <button onClick={handleLineLogin}>LINEでログイン</button> */}
        </Layout>
    );
};

export default LoginPage;
