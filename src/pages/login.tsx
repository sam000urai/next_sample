import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../plugins/firebase';
import { provider } from '../plugins/firebase';

const LoginPage = () => {
    const router = useRouter();

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

    // const handleGoogleLogin = () => {
    //     auth.signInWithPopup(provider);
    // };

    const handleLineLogin = () => {
        // LINEログインのロジックを実装します
    };

    return (
        <div>
            <h1>ログインページ</h1>
            {/* <button onClick={handleGoogleLogin}>Googleでログイン</button> */}
            <button onClick={handleLineLogin}>LINEでログイン</button>
        </div>
    );
};

export default LoginPage;
